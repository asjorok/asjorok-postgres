alter table planets 
add column owner uuid references planets(id)