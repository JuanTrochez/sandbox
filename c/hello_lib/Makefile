all:
	gcc -E -o hello.i hello.c
	gcc -S -o hello.s hello.i
	gcc -c -o hello.o hello.s
	gcc -s -Wl,--out-implib=libhello.dll.a -Wl,--output-def,hello.def -shared -o hello.dll hello.o
	gcc -s -Wl,--image-base,0x300000 -Wl,--major-image-version,3 -Wl,--minor-image-version,2 -L. -o essai.exe essai.c -lhello

clean:
	rm -f *.exe *.dll *.i *.s *.o *.a *.def

install:
	mkdir -p /usr/local/bin
	cp -f hello.dll /usr/local/bin

uninstall:
	rm -f /usr/local/bin/hello.dll
