#include <nan.h>

extern "C" {
	__declspec( dllimport ) void hello(char *name);
}

using namespace v8;

NAN_METHOD(Method) {
	NanScope();
	hello("Juan");
	NanReturnValue(String::New("Hello world"));
}

void Init(Handle<Object> exports) {
	exports->Set(NanSymbol("hello"), FunctionTemplate::New(Method)->GetFunction());
}

NODE_MODULE(hellomod, Init)
