package mn.covid.app.extensions

import mn.covid.app.models.Window
import mn.covid.app.models.Scan
import com.google.android.gms.nearby.exposurenotification.ExposureWindow
import com.google.android.gms.nearby.exposurenotification.ScanInstance

fun ScanInstance.toScanInstance(): Scan {
    return Scan(
            typicalAttenuation = typicalAttenuationDb,
            minAttenuation = minAttenuationDb,
            secondsSinceLastScan = secondsSinceLastScan
    )
}

 fun ExposureWindow.toExposureWindow(): Window {
     return Window(
             day = dateMillisSinceEpoch,
             scanInstances = scanInstances.map { scanInstance ->  scanInstance.toScanInstance()},
             reportType = reportType,
             infectiousness = infectiousness,
             calibrationConfidence = calibrationConfidence
     )
 }

