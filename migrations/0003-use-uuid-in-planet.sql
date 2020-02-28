drop table planets;
create table planets (
    id uuid primary key default uuid_generate_v4(),
    name varchar unique not null
)