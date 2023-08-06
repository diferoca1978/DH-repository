
/*INNER JOIN

/*SELECT canciones.nombre, generos.nombre
FROM canciones
INNER JOIN generos 
ON canciones.id_genero = generos.id;

/*SELECT albumes.titulo, artistas.nombre
FROM albumes
INNER JOIN artistas
ON artistas.id = albumes.id_artista
WHERE nombre LIKE "Deep purple";

/*SELECT canciones.nombre, tipos_de_medio.nombre
FROM canciones
INNER JOIN tipos_de_medio
ON tipos_de_medio.id = canciones.id_tipo_de_medio;*/

/* DISTINCTS

SELECT DISTINCT titulo 
FROM musimundos.empleados;*/

/*GROUP BY

SELECT id_genero, COUNT(*)
FROM canciones
GROUP BY id_genero;*/

/*ADD FUNCTIONS

SELECT count(pais) 
FROM clientes 
WHERE pais = "Brazil";

SELECT SUM(total) 
FROM facturas;

SELECT MIN(bytes)
FROM canciones;

SELECT MAX(bytes)
FROM canciones;

SELECT AVG(milisegundos)
FROM canciones;*/

/*HAVING

SELECT SUM(total), pais_de_facturacion
FROM facturas
GROUP BY pais_de_facturacion
HAVING SUM(total) > 100;

select COUNT(ciudad), ciudad
FROM clientes
GROUP BY ciudad
HAVING COUNT(ciudad) >= 2
ORDER BY ciudad;*/

/*EXERCICE SONGS BY GENRE

!! pendiente resolver

SELECT canciones.nombre, generos.nombre
FROM canciones
INNER JOIN generos
ON generos.id = canciones.id_genero/*
									