use diesel::RunQueryDsl;
use rocket::serde::json::Json;
use crate::models::note_model::Note;
use crate::schema::notes;
use crate::repository::pg_repo::{
    Db,
    fetch_notes,
};

#[get("/")]
pub async fn get_notes(conn: Db) -> Json<Vec<Note>> {
    conn
        .run(|c| fetch_notes(c))
        .await
        .map(Json)
        .expect("Failed to fetch notes")
}

#[post("/", data = "<body>")]
pub async fn add_note(conn: Db, body: Json<Note>) -> Json<Note> {
    conn
        .run(move |c| {
            diesel::insert_into(notes::table)
                .values(&body.into_inner())
                .get_result(c)
        })
        .await
        .map(Json)
        .expect("Note able to add note")
}
