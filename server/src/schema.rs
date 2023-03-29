// @generated automatically by Diesel CLI.

diesel::table! {
    notes (id) {
        id -> Int4,
        title -> Varchar,
        description -> Text,
    }
}
