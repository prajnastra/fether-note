use rocket_sync_db_pools::{ diesel::PgConnection, database };
use crate::models::note_model::Note;
use diesel::{QueryResult, RunQueryDsl};
use crate::schema::notes;

#[database("pg_db")]
pub struct Db(PgConnection);

pub fn fetch_notes(conn: &mut PgConnection) -> QueryResult<Vec<Note>> {
    notes::table.load(conn)
}

// pub fn create_note(conn: &mut MysqlConnection, new_note: Json<Note>) -> QueryResult<Note> {
    //notes
     //   .limit(5)
      //  .load::<Note>(conn)
// }
