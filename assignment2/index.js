function calculateTax()
        {
            const income = parseFloat(document.getElementById("inputBox").value);
            
            if(isNaN(income))
            {
                document.getElementById("errorMessage").innerHTML = "Error: enter a number";
                clearFieldsExceptErrorDiv();
                return;
            }

            document.getElementById("errorMessage").innerHTML = "";
            let taxOwed = 0;

            if(income<=48535)
            {
                taxOwed += 0.15 * income; 
            }
            else if(income>48535 && income <=97069)
            {
                let remainingIncome = income - 48535;
                taxOwed+= 0.205 * remainingIncome;
                taxOwed+= 7280;
            }
            else if(income>97069 && income <=150473)
            {
                let remainingIncome = income - 97069;
                taxOwed+= 0.26 * remainingIncome;
                taxOwed+=17230;
            }
            else if(income>150473 && income <= 214368)
            {
                let remainingIncome = income - 150473;
                taxOwed+= 0.29 * remainingIncome;
                taxOwed+=31115;
            }
            else
            {
                let remainingIncome = income - 214368;
                taxOwed += 0.33 * remainingIncome;
                taxOwed += 49645;
            }

            taxOwed = Math.round(taxOwed*100)/100;
            document.getElementById("taxOwed").innerHTML = " $"+taxOwed;

            let effectiveTaxRate = 100.0 - ((income - taxOwed)/income * 100);
            effectiveTaxRate = Math.round(effectiveTaxRate*100)/100;
            document.getElementById("effectiveTaxRate").innerHTML = effectiveTaxRate;

            let retainedEarnings = income - taxOwed;
            retainedEarnings = Math.round(retainedEarnings * 100)/100;
            document.getElementById("retainedEarnings").innerHTML = " $"+retainedEarnings;
        }

        function clearFields()
        {
            document.getElementById("inputBox").value = "";
            document.getElementById("inputBox").focus();
            document.getElementById("taxOwed").innerHTML = "";
            document.getElementById("effectiveTaxRate").innerHTML = "";
            document.getElementById("retainedEarnings").innerHTML = "";
            document.getElementById("errorMessage").innerHTML = "";
        }

        function clearFieldsExceptErrorDiv()
        {
            document.getElementById("inputBox").value = "";
            document.getElementById("inputBox").focus();
            document.getElementById("taxOwed").innerHTML = "";
            document.getElementById("effectiveTaxRate").innerHTML = "";
            document.getElementById("retainedEarnings").innerHTML = "";
        }