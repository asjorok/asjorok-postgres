create table users (
    id uuid primary key default uuid_generate_v4(),
    name varchar unique not null,
    email email unique not null
)