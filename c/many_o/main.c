#include <stdio.h>

void hello(const char *name);
int add(int a, int b);
int minus(int a, int b);

int fois(int a, int b) {
	return a * b;
}


int main(char **argv, int argc) {
	hello("Juan");
	printf("%d + %d = %d\n", 1, 2, add(1, 2));
	printf("%d - %d = %d\n", 1, 2, minus(1, 2));
	printf("%d * %d = %d\n", 1, 2, fois(1, 2));
	return 0;
}


