//your JS code here. If required.
function daysOfAYear (days) {
	if((days%4===0 && days%100!=0)||days%400===0){
		return 366;
	}
	return 365;
	
}