use diesel::prelude::*;

#[derive(Queryable)]
pub struct Plant {
    pub note_id: i32,
    pub title: Option<String>,
    pub description: Option<String>,
}
