^j::
	;InputBox, out, Search, What do you want to search on google?
	run, chrome
	winactivate, New Tab - Google Chrome
	MouseMove, 700, 400, 50
	Click
	;SetKeyDelay, 200, 0, Play
	;IfWinActive, New Tab - Google Chrome
		Send, Hello World{enter}
Return
