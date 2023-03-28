use diesel::RunQueryDsl;
use rocket::serde::json::Json;
use crate::models::note_model::Note;
use crate::schema::notes::dsl::*;
use crate::repository::mysql_repo::{
    MyDatabase,
    fetch_notes,
};

#[get("/")]
pub async fn get_notes(conn: MyDatabase) -> Json<Vec<Note>> {
    conn
        .run(|c| fetch_notes(c))
        .await
        .map(Json)
        .expect("Failed to fetch notes")
}

#[post("/", data = "<body>")]
pub async fn add_note(conn: MyDatabase, body: Json<Note>) -> &'static str {
    let _result = conn
        .run(move |c| {
            diesel::insert_into(notes)
                .values(&body.into_inner())
                .execute(c)
        })
        .await
        .map(Json)
        .expect("Note able to add note");

        "Success"
}
