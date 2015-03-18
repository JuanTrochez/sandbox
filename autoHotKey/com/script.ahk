IELoad(wb)
{
    If !wb    ;If wb is not a valid pointer then quit
        Return False
    Loop    ;Otherwise sleep for .1 seconds untill the page starts loading
        Sleep,100
    Until (wb.busy)
    Loop    ;Once it starts loading wait until completes
        Sleep,100
    Until (!wb.busy)
    Loop    ;optional check to wait for the page to completely load
        Sleep,100
    Until (wb.Document.Readystate = "Complete")
	Return True
}

wb := ComObjCreate("InternetExplorer.Application") ;create a IE instance
wb.Visible := True
wb.Navigate("Google.com")
IELoad(wb)
wb.Document.All.q.Value := "site:autohotkey.com tutorial"
IELoad(wb)
wb.Document.All.btnK.click()

Return
