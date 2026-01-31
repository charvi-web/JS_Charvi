//for
for (let i=0;i<10;i++)
{
    // if (i==5) console.log("5 is best");
    // console.log(`${i}`)
}


for (let i=1;i<=10;i++)
{
    // console.log(`outer loop value : ${i}`);
    for (let j=1;j<=10;j++)
    {
        // console.log(`inner loop value : ${j}`);
        // console.log(`${i} * ${j} = ${i*j}`)
    }
} //outer loop ek baar chlega usmei hr baar 10 baar inner chlega.


let myArr = ["flash", "batman", "superman"]
for (let i=0;i<myArr.length;i++)
{
    console.log(myArr[i])
}

// break continue -- skip

for (let i=1;i<=20;i++)
{
    if (i==5) 
        {
            console.log("detected 5");
            // break;
            continue; // ek baar maaf krde, ignore that single iteration only.
        }
    console.log(`value of i is ${i}`);

}

