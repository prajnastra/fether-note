mod api;
mod models;
mod repository;
mod schema;

#[macro_use]
extern crate rocket;
extern crate diesel;

use api::note_api::{
    get_notes,
    add_note
};
use repository::mysql_repo::MyDatabase;

#[launch]
fn rocket() -> _ {
    rocket::build()
        .attach(MyDatabase::fairing())
        .mount("/", routes![get_notes, add_note])
}
