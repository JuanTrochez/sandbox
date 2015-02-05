int printf(const char *fmt, ...);
void hello(char *name);
const short int x[3900] __attribute__ (( section("truc") ))= {1, 2};
int main(char **argv, int argc) {
	printf("x = %d\n", (int) x[1]);
	printf("Address x = 0x%08x\n", (int) x);
	hello("Juan");
}
