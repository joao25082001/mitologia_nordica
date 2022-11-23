create database mitologia;
use mitologia;
select * from usuario;
create table usuario(
idusuario int auto_increment primary key,
nome varchar(40),
email varchar(40),
senha varchar(10),
qnt_login int,
fk_persona int, foreign key (fk_persona) references personagem(idpersona)
);
create table personagem(
idpersona int auto_increment primary key,
nome varchar(40),
qnt_votos int
);
insert into personagem values
(null,'fenrir',0),
(null,'tyr',0),
(null,'thor',0),
(null,'odin',0),
(null,'loki',0),
(null,'jonmungader',0),
(null,'balder',0),
(null,'heimdall',0);
select * from personagem ;
update personagem set qnt_votos = qnt_votos +1 where idpersona = 1;
update usuario set fk_persona where idusuario = 1;


