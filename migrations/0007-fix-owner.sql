alter table planets
drop column owner;
alter table planets 
add column owner uuid references users(id);
