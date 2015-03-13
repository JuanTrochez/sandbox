numpad0 & numpad1::
	MsgBox Hello! 0 and 1.
Return

Numpad0 & Numpad2::
	Run, chrome.exe
Return

#IfWinActive
#space::
   MsgBox You can't press Win+space when notepad is activate.
Return
#IfWinActive