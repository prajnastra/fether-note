#[get("/")]
pub fn get_notes() -> &'static str {
    "Hello, world!"
}
