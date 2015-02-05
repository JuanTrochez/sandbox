all:
	gcc -E -o hello.i hello.c
	gcc -S -o hello.s hello.i
	gcc -c -o hello.o hello.s
	gcc -s -shared -o hello.dll hello.o
	gcc -s -Wl,--image-base,0x300000 -Wl,--major-image-version,3 -Wl,--minor-image-version,2 -o essai.exe essai.c hello.dll

clean:
	rm -f *.exe *.dll *.i *.s *.o
