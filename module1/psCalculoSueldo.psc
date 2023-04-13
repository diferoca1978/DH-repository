
Algoritmo psCalculoSueldo
	
	Escribir "Ingrese su nombre";
	Leer nombre;
	Escribir "Ingrese apellido";
	Leer apellido;
	Escribir "Ingrese Sueldo actual";
	Leer sueldoActual;
	
	Si sueldoActual < 33000 Entonces
		porcentaje<-20;
	SiNo
		porcentaje<-15
	FinSi
	nuevoSueldo<-sueldoActual + (sueldoActual*porcentaje)/100;
	
	Escribir nombre;
	Escribir apellido;
	Escribir sueldoActual;
	Escribir porcentaje,porCiento;
	Escribir "Su nuevo salario es ",nuevoSueldo;
	
	
	
	
	
	
FinAlgoritmo
