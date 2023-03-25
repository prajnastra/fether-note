mod api;
mod repository;

#[macro_use]
extern crate rocket;

use api::note_api::get_notes;

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![get_notes])
}
