{
	"targets": [
		{
			"target_name": "hello",
			"sources": [ "hello.cc" ],
			"include_dirs": [
				"<!(node -e \"require('nan')\")"
			],
			"libraries": [
				"C:\\juan\\repos\\sandbox\\node\\dll_module\\hello\\hello.dll2"
			]
		}
	]
}
