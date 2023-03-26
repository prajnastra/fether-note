mod api;
mod models;
mod repository;

#[macro_use]
extern crate rocket;

use api::note_api::get_notes;
use repository::mysql_repo::MysqlRepo;

#[launch]
fn rocket() -> _ {
    let connection = MysqlRepo::init();
    rocket::build()
        .manage(connection)
        .mount("/", routes![get_notes])
}
