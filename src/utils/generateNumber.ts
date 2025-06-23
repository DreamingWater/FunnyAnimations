
export const MaxNumber = 156;

export class GenerateNumber {
     generateRandomNumber(): number {
        let randomNumber = Math.floor(Math.random() * MaxNumber);
        randomNumber = randomNumber == 0 ? 1:randomNumber;     // 限制数量为 1 ~ MaxNumber
        const storedData = this.readStoredData();
        const uniqueNumber = this.getUniqueNumber(randomNumber, storedData,MaxNumber);
        return uniqueNumber;
    }

     save(number: number): void {
        const storedData = this.readStoredData();
         if (!storedData.includes(number)) {
             storedData.push(number);
             localStorage.setItem('data', JSON.stringify(storedData));
         }
    }

    clean(): void {
         localStorage.setItem('data', JSON.stringify([]));
    }

     readStoredData(): number[] {
        const storedData = localStorage.getItem('data');
        if (storedData) {
            return JSON.parse(storedData);
        }
        return [];
    }

   getUniqueNumber(number: number, storedData: number[],MaxNumber:number): number {
        while (storedData.includes(number)) {
            number = Math.floor(Math.random() * MaxNumber);
            number = number == 0 ? 1:number;     // 限制数量为 1 ~ MaxNumber
        }
        return number;
    }
    generateSplitNumber(){
        // 生成一个0到400之间的随机数
        const randomNumber = this.generateRandomNumber();
        // 计算百位、十位和个位
        const result = this.splitNumber(randomNumber);
        const hundreds = result.hundreds;
        const tens = result.tens;
        const ones = result.ones;

        // 返回百位、十位和个位
        return {
            hundreds,
            tens,
            ones,
            randomNumber
        };
    }

    splitNumber(randomNumber:number){
        const hundreds = Math.floor(randomNumber / 100);
        const tens = Math.floor((randomNumber % 100) / 10);
        const ones = randomNumber % 10;
        return {
            hundreds,
            tens,
            ones
        };
    }
    judgeNumberValid(this_number:number){
         this_number = this_number >= MaxNumber ? 1 : this_number;
         this_number = this_number <= 1 ? 1 : this_number;
        const storedData = this.readStoredData();
        if(storedData.includes(this_number)){
            this_number += 1;
            return this.judgeNumberValid(this_number)
        }
        return this_number;
    }
}
