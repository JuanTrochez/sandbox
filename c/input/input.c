#include <stdio.h>
#include <string.h>


int main(char **argv, int argc) {
	char coucou[10];
	char str[5];
	memset(str, 0, 5);
	memset(coucou, 0, 10);
	printf("coucou: |%s|.\n", coucou);
	printf("stdin: |%08X|.\n", stdin);
	printf("Enter your name : ");
	fgets(str, 5, stdin);
	printf("Enter your firstname : ");
	fgets(coucou, 10, stdin);
	printf("Your name is %s.\n", str);
	printf("coucou: |%s|.\n", coucou);
	fprintf(stderr, "Error...\n");
	return 0;
}
