{
	"targets": [
		{
			"target_name": "hellomod",
			"sources": [ "hellomod.cc" ],
			"include_dirs": [
				"<!(node -e \"require('nan')\")"
			],
			"libraries": [
				"C:\\jlouis\\repos\\juan\\sandbox\\node\\dll_module\\hello_lib\\hello.lib"
			]
		}
	]
}
