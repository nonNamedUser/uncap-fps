            const q1=document.getElementById("q1")
            const q2=document.getElementById("q2")
            const q3=document.getElementById("q3")

            q1.addEventListener("click", () => {
                var a=document.getElementById("a")
                var a2=document.getElementById("a2")
                var img=document.getElementById("img")
                var img2=document.getElementById("img2")

                img.style.width=999
                img.style.height=552
                img.style.visibility="visible"
                img.src="./readme_elements/img/p1.png"


                a.textContent=`Open "uncap_roblox.bat" or "uncap_studio.bat", if you got the smartscreen popup press more.`

                img2.style.width=999
                img2.style.height=552
                img2.style.visibility="visible"
                img2.src="./readme_elements/img/p2.png"

                a2.textContent=`Then press "Run Anyways"` 
                
                //999x552
            })

            q2.addEventListener("click", () => {
                var a=document.getElementById("a")
                var a2=document.getElementById("a2")
                var img=document.getElementById("img")
                var img2=document.getElementById("img2")

                //img.style.width=999
                //img.style.height=552
                img.style.visibility="hidden"
                //img.src="./readme_elements/img/p1.png"


                a.textContent=`Depends who you are asking, the project is open sourced so feel free to look around!`

                //img2.style.width=999
                //img2.style.height=552
                img2.style.visibility="hidden"
                //img2.src="./readme_elements/img/p2.png"

                a2.textContent=`` 
            })
            
            q3.addEventListener("click", () => {
                var a=document.getElementById("a")
                var a2=document.getElementById("a2")
                var img=document.getElementById("img")
                var img2=document.getElementById("img2")

                //img.style.width=999
                //img.style.height=552
                img.style.visibility="hidden"
                //img.src="./readme_elements/img/p1.png"


                a.textContent=`The license is located in the folder, named "license.txt"`

                //img2.style.width=999
                //img2.style.height=552
                img2.style.visibility="hidden"
                //img2.src="./readme_elements/img/p2.png"

                a2.textContent=`` 
            })
