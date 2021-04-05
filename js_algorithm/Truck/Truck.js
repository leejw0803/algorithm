function solution(bridge_length, weight, truck_weights) {
    /* 
     * 일단 배열의 길이는 bridge_length 가 될 것,
     * 그러면 onBridgeTrucks라는 배열 이 있고, 이 배열의 총 합은 weight를 넘지 않아야 함
     * 순서대로 오른다고 생각함
     * 트럭은 한 번에 1씩 올라간다.
     * 처음에 truck_weights에서 하나씩 shift하고 ( weight 이상이 되지 않을 때까지 )
     * 그만큼 shift 했으면 배열의 길이만큼 이동하고 새롭게 shift -> shift 할 때마다 weight 체크를 해줘야 함
     * onBridgeTrucks에는 남은 이동 길이와 무게?를 하면 될 것 같은데... 일단,,, 풀면서 더 생각해봅시다.
     
     * 시간 기준으로 생각해 봤을 때,
     * 매 클럭마다 체크해야 할 것 -> 새 트럭이 들어오는지, 다리를 나가는 트럭이 존재하는지, 그냥 지나가는지
     * 새 트럭이 들어온다면, onBridgeTrucks에 추가해 주고 클럭 1 증가
     * 다리를 나가는 트럭이 존재한다면, onBridgeTrucks에서 shift 해주고, ,,,, 다시 생각해보자
     */
    
    let totalTime = 0;
    
    const truckInfo = truck_weights.reduce((acc, cur, i) => {
        acc[i] = {
            weight : cur,
            remainTime : bridge_length,
            isOnBridge : false
        }
        
        return acc;
    }, []);
    
    const onBridgeTrucks = [];
    
    while(true){
        let currentTruck = truckInfo.shift();
    
        const onBridgeTrucksWeight = getOnBridgeTrucksWeight(truckInfo);
        // console.log(onBridgeTrucksWeight);
        if(canGetOnBridge(currentTruck, onBridgeTrucksWeight, weight)){
            currentTruck.isOnBridge = true;
            // onBridgeTrucks.push(currentTruck);
        }

        truckInfo.unshift(currentTruck);

        timeClock(truckInfo);
        totalTime++;

        if(allTruckArrival(truckInfo)){
            break;
        }
    }
    
    return totalTime;
    
}

function getOnBridgeTrucksWeight(truckInfo){
    let totalWeight = 0;
    
    truckInfo.forEach(truck=>{
        if(truck.isOnBridge){
            totalWeight += truck.weight;
        }
    });
    
    return totalWeight;
}

function canGetOnBridge(currentTruck, onBridgeTrucksWeight, weight){
    // console.log(currentTruck.weight);
    return (onBridgeTrucksWeight + currentTruck.weight < weight) ? true : false;
}

function timeClock(truckInfo){
    truckInfo.forEach(truck=>{
        if(truck.isOnBridge){
            truck.remainTime -= 1;    
        }
    });
}

function allTruckArrival(truckInfo){
    let allTruckArrival = false;
    truckInfo.forEach(truck=>{
        if(truck.remainTime) {
            return false;
        }
    });
    return true;
}