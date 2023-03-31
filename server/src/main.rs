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
use repository::pg_repo::Db;
use server::CORS;


#[launch]
fn rocket() -> _ {
    rocket::build()
        .attach(CORS)
        .attach(Db::fairing())
        .mount("/", routes![get_notes, add_note])
}
