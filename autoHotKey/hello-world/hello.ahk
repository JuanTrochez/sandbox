;hot key
^d::
	Send, Hello World{!}
Return

;hot string
::hw1::Hello World typing "hw1"

;hot string without endchar
:*:hw2::Hello World typing "hw2"

;hot string with actions
::hw3::
	MsgBox Hello World!
Return

;hot key with many instructions
^j::
	Send, Hello
	MsgBox World!
Return

;opening notepad
^k::
	Run, notepad
Return

^b::
	send, {ctrl down}c{ctrl up}
	SendInput, [b]{ctrl down}v{ctrl up}[/b] ;
Return

#IfWinActive Untitled - Notepad
#space::
   MsgBox You can't press Win+space when notepad is activate.
Return
#IfWinActive

;hello in mutliple lines
::hw4::
	send, Hello{enter}world in{enter}mutliple lines{!}
	send,
(
And an
ohter one
more simple!
)
Return

^#u::
	Run ::{871C5380-42A0-1069-A2EA-08002B30309D}
Return
