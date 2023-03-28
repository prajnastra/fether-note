// @generated automatically by Diesel CLI.

diesel::table! {
    blog_posts (id) {
        id -> Integer,
        title -> Varchar,
        description -> Text,
    }
}

diesel::table! {
    note (NoteID) {
        NoteID -> Integer,
        title -> Nullable<Varchar>,
        description -> Nullable<Varchar>,
    }
}

diesel::table! {
    notes (id) {
        id -> Integer,
        title -> Varchar,
        description -> Text,
    }
}

diesel::table! {
    plant (PlantID) {
        PlantID -> Integer,
        BotanicalName -> Nullable<Varchar>,
        CommonName -> Nullable<Varchar>,
        Family -> Nullable<Varchar>,
        PlantType -> Nullable<Varchar>,
        SoilType -> Nullable<Varchar>,
        SoilpH -> Nullable<Varchar>,
        SunExposure -> Nullable<Varchar>,
    }
}

diesel::allow_tables_to_appear_in_same_query!(
    blog_posts,
    note,
    notes,
    plant,
);
