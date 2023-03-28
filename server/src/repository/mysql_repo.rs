use diesel::prelude::*;
use rocket_sync_db_pools::{ diesel::MysqlConnection, database };
use server::schema::notes::dsl::*;
use crate::models::note_model::Note;
// use rocket::serde::json::Json;

#[database("mysql_db")]
pub struct MyDatabase(MysqlConnection);

pub fn fetch_notes(conn: &mut MysqlConnection) -> QueryResult<Vec<Note>> {
    notes
        .limit(5)
        .load::<Note>(conn)
}

// pub fn create_note(conn: &mut MysqlConnection, new_note: Json<Note>) -> QueryResult<Note> {
// }
