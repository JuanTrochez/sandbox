#include <stdio.h>
#include <stdlib.h>
#include <string.h>


int main(char **argv, int argc) {
	printf("Hello world!\n");
	char *name = NULL;
	for (int i = 0; i < 10000000000; i++) {
		name = (char *) malloc(100000*sizeof(char));
		strcpy(name, "coucou");
		printf("name = %s\n", name);
		printf("Address = 0x%08x\n", name);
		free(name);
	}
	return 0;
}
