#include <stdio.h>


int main(char **argv, int argc) {
	char coucou[100] = "coucou";
	printf("%s", coucou);
	printf("address : 0x%08x", coucou);
	return 0;
}
