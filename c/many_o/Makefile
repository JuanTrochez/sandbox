all:
	gcc -c -o hello.o hello.c
	gcc -c -o main.o main.c
	gcc -c -o math.o math.c
	ar cru juan.lib hello.o math.o
	gcc -o essai.exe main.o juan.lib

clean:
	rm -f *.exe *.dll *.i *.s *.o *.a

