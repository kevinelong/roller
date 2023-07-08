class Roller{
    
    static getInt(n){
        return Math.round(Math.random() * n + 0.5);
    }
    
    static roll(quantity=3, sides=6){
        let total = 0;
        for(let i=0; i<quantity; i++){
            total += Roller.getInt(sides);
        }
        return total;
    }

    static makeDistribution(times=50, quantity=3, sides=6){
        const MAX = quantity * sides;
        const distribution = {};
        
        for(let v=quantity;v<MAX+1; v++){
            distribution[v] = 0;
        }

        for(let i=0; i<times; i++){
            let total = 0;
            for(let q=0; q<quantity; q++){
                total += Roller.getInt(sides);
            }
            distribution[total] += 1;
        }

        return distribution;
    }

    static graphDistribution(data, scale=1){
        const output = [];
        for (const [key, value] of Object.entries(data)) {
            output.push(`${key.toString().padStart(2," ")}|${'#'.repeat(Math.round(value / scale))}(${value})`)
        }
        return output.join("\n");
    }
}

//TESTS
if(!window){
    console.log(Random.graphDistribution(Random.makeDistribution(5000), 10));
}