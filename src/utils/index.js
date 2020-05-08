export const calculateRewards = purchaseTotal => {
    var rewardPoints = 0

    if (purchaseTotal > 100) {
        var difference = purchaseTotal - 100
        rewardPoints = (difference * 2) + 50
    }
    else if (purchaseTotal > 50) {
        rewardPoints = purchaseTotal - 50
    }

    return rewardPoints
}