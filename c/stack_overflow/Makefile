all:
	#gcc -Wl,--stack=100000000 -o stack.exe stack.c
	gcc -Xlinker --stack=100000000,10000 -o stack.exe stack.c

clean:
	rm -f *.exe