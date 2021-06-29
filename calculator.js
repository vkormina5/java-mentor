<script language="JavaScript">

var Fcalc = document.calc;
var Currents = 0;
var FlagNewNum = false;
var PendingOp = "";

if(flag){
   number1 = romanToNumber(blocks[0]);
   number2 = romanToNumber(blocks[1]);
  } 
  else
  {
    number1 = Integer.parseInt(blocks[0]);
    operation = text.charAt(blocks[0].length());
    number2 = Integer.parseInt(blocks[1]);
   }

function NumPressed (Num) 
{
		if (FlagNewNum) 
		{
			Fcalc.ReadOut.value = Num;
			FlagNewNum = false;
		}	
		else 
		{
			if (Fcalc.ReadOut.value == "0")
				Fcalc.ReadOut.value = Num;
			else
				Fcalc.ReadOut.value += Num;
		}
}

function Operation (Op) 
{
		var Readout = Fcalc.ReadOut.value;
		if (FlagNewNum && PendingOp != "=")
		{
			Fcalc.ReadOut.value = Currents;
		}
		else
		{
			FlagNewNum = true;
			if ( '+' == PendingOp )
				Currents += parseFloat(Readout);
			else if ( '-' == PendingOp )
				Currents -= parseFloat(Readout);
			else if ( '/' == PendingOp )
				Currents /= parseFloat(Readout);
			else if ( '*' == PendingOp )
				Currents *= parseFloat(Readout);
			else
				Currents = parseFloat(Readout);
			Fcalc.ReadOut.value = Currents;
			PendingOp = Op;
		}
}

function ClearEntry () 
{
		Fcalc.ReadOut.value = "0";
		FlagNewNum = true;
}

function Clear () 
{
		Currents = 0;
		PendingOp = "";
		ClearEntry();

}

</script>
