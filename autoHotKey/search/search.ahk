^j::
	inputBox output, Search on google, Search:
	StringReplace, output2, output, %A_SPACE%, `%20, ALL
	run, https://www.google.fr/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=%output2%
