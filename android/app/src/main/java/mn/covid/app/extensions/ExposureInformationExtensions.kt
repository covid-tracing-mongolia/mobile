package mn.covid.app.extensions

import mn.covid.app.models.Information
import com.google.android.gms.nearby.exposurenotification.ExposureInformation

fun ExposureInformation.toInformation(): Information {
    return Information(
        attenuationValue = attenuationValue,
        date = dateMillisSinceEpoch,
        duration = durationMinutes,
        totalRiskScore = totalRiskScore,
        transmissionRiskLevel = transmissionRiskLevel
    )
}