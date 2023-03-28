use diesel::{ Insertable, Queryable };
use serde::{ Deserialize, Serialize };
use crate::schema::notes;


#[derive(Serialize, Deserialize, Queryable, Debug, Insertable)]
#[diesel(table_name = notes)]
pub struct Note {
    pub id: i32,
    pub title: String,
    pub description: String
}


