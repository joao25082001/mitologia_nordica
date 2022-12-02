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
create table nota(
idnota int primary key auto_increment,
nota int,
fk_nota_usuario int, foreign key (fk_nota_usuario) references usuario(idusuario)
);
select * from nota;


 SELECT personagem.nome,personagem.qnt_votos,usuario.* FROM personagem join usuario on fk_persona = personagem.idpersona GROUP BY personagem.nome;
 SELECT* FROM personagem join usuario on fk_persona = personagem.idpersona GROUP BY personagem.nome;
 