"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Battery, BatteryCharging, BatteryWarning, AlertTriangle, Loader2 } from "lucide-react"
import Script from "next/script"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BatteryLifeCheck() {
  const [isLoading, setIsLoading] = useState(true)
  const [showAdDialog, setShowAdDialog] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [batteryData, setBatteryData] = useState<{
    level: number
    charging: boolean
    chargingTime: number
    dischargingTime: number
    supported: boolean
  }>({
    level: 0,
    charging: false,
    chargingTime: 0,
    dischargingTime: 0,
    supported: false,
  })

  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulate checking process with progress updates
    const totalCheckingTime = 15000 // 15 seconds
    const updateInterval = 500 // Update progress every 500ms
    const totalSteps = totalCheckingTime / updateInterval
    let currentStep = 0

    const progressInterval = setInterval(() => {
      currentStep++
      const newProgress = Math.min(95, (currentStep / totalSteps) * 100)
      setLoadingProgress(newProgress)

      if (currentStep >= totalSteps) {
        clearInterval(progressInterval)

        // After "checking" is complete, show the ad dialog
        setShowAdDialog(true)
        setLoadingProgress(100)

        // Check if Battery API is supported
        if ("getBattery" in navigator) {
          navigator
            .getBattery()
            .then((battery) => {
              updateBatteryStatus(battery)

              // Listen for battery status changes
              battery.addEventListener("levelchange", () => updateBatteryStatus(battery))
              battery.addEventListener("chargingchange", () => updateBatteryStatus(battery))
              battery.addEventListener("chargingtimechange", () => updateBatteryStatus(battery))
              battery.addEventListener("dischargingtimechange", () => updateBatteryStatus(battery))
            })
            .catch((err) => {
              setError("Failed to access battery information. This might be due to privacy settings.")
              console.error(err)
            })
        } else {
          setError("Battery Status API is not supported in your browser.")
        }
      }
    }, updateInterval)

    return () => clearInterval(progressInterval)
  }, [])

  const closeAdDialog = () => {
    setShowAdDialog(false)
    setIsLoading(false) // Finally stop loading when ad dialog is closed
  }

  const updateBatteryStatus = (battery: any) => {
    setBatteryData({
      level: battery.level * 100,
      charging: battery.charging,
      chargingTime: battery.chargingTime,
      dischargingTime: battery.dischargingTime,
      supported: true,
    })
  }

  const formatTime = (seconds: number) => {
    if (seconds === Number.POSITIVE_INFINITY) return "Unknown"
    if (seconds <= 0) return "Calculating..."

    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)

    return `${hours}h ${minutes}m`
  }

  const getBatteryColor = (level: number) => {
    if (level <= 20) return "bg-red-500"
    if (level <= 50) return "bg-amber-500"
    return "bg-green-500"
  }

  const getBatteryIcon = () => {
    if (batteryData.charging) {
      return <BatteryCharging className="h-8 w-8 text-green-500" />
    }

    if (batteryData.level <= 20) {
      return <BatteryWarning className="h-8 w-8 text-red-500" />
    }

    return <Battery className="h-8 w-8 text-primary" />
  }

  const getBatteryStatus = () => {
    if (batteryData.charging) {
      return {
        title: "Charging",
        description:
          batteryData.chargingTime !== Number.POSITIVE_INFINITY
            ? `Full charge in ${formatTime(batteryData.chargingTime)}`
            : "Connected to power",
      }
    }

    if (batteryData.level <= 20) {
      return {
        title: "Low Battery",
        description:
          batteryData.dischargingTime !== Number.POSITIVE_INFINITY
            ? `About ${formatTime(batteryData.dischargingTime)} remaining`
            : "Connect to power soon",
      }
    }

    return {
      title: "Battery Status",
      description:
        batteryData.dischargingTime !== Number.POSITIVE_INFINITY
          ? `About ${formatTime(batteryData.dischargingTime)} remaining`
          : "Battery is in good condition",
    }
  }

  const batteryStatus = getBatteryStatus()

  // Generate loading messages based on progress
  const getLoadingMessage = () => {
    if (loadingProgress < 30) {
      return "Initializing battery scan..."
    } else if (loadingProgress < 60) {
      return "Analyzing battery health and performance..."
    } else if (loadingProgress < 90) {
      return "Calculating battery statistics..."
    } else {
      return "Finalizing battery report..."
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Battery Life Check</h1>

      {/* Top Ad Banner */}
      <div className="w-full mb-6 bg-muted p-2 rounded-lg">
        <p className="text-xs text-center text-muted-foreground mb-2">Advertisement</p>
        <div id="ad-container-top" className="min-h-[100px] flex items-center justify-center">
          {/* AdSense ads will be inserted here */}
          <script type="text/javascript">
	atOptions = {
		'key' : '7202e48b6b3f5f7e2c04f48ba4e0c000',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/7202e48b6b3f5f7e2c04f48ba4e0c000/invoke.js"></script>
          <p className="text-sm text-muted-foreground">Loading advertisement...</p>
        </div>
      </div>

      {isLoading ? (
        <Card className="w-full">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" />
              Checking Battery Status
            </CardTitle>
            <CardDescription>Please wait while we analyze your battery...</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 py-4">
              <Progress value={loadingProgress} className="h-3" />
              <p className="text-sm text-muted-foreground text-center">{getLoadingMessage()}</p>
            </div>
          </CardContent>
        </Card>
      ) : error ? (
        <Card className="w-full">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              Not Available
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{error}</p>
          </CardContent>
        </Card>
      ) : (
        <Card className="w-full">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>{batteryStatus.title}</CardTitle>
                <CardDescription>{batteryStatus.description}</CardDescription>
              </div>
              {getBatteryIcon()}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Battery Level</span>
                <span className="font-medium">{batteryData.level.toFixed(0)}%</span>
              </div>
              <Progress
                value={batteryData.level}
                className="h-3"
                indicatorClassName={getBatteryColor(batteryData.level)}
              />
            </div>

            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span>Status</span>
                <span className="font-medium">{batteryData.charging ? "Charging" : "Discharging"}</span>
              </div>

              {batteryData.charging ? (
                <div className="flex justify-between">
                  <span>Time until full</span>
                  <span className="font-medium">{formatTime(batteryData.chargingTime)}</span>
                </div>
              ) : (
                <div className="flex justify-between">
                  <span>Time remaining</span>
                  <span className="font-medium">{formatTime(batteryData.dischargingTime)}</span>
                </div>
              )}
            </div>

            {/* Inline Ad */}
            <div className="bg-muted p-2 rounded-lg mt-4">
              <p className="text-xs text-center text-muted-foreground mb-2">Advertisement</p>
              <div id="ad-container-inline" className="min-h-[100px] flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Loading advertisement...</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Bottom Ad Banner */}
      <div className="w-full mt-6 bg-muted p-2 rounded-lg">
        <p className="text-xs text-center text-muted-foreground mb-2">Advertisement</p>
        <div id="ad-container-bottom" className="min-h-[250px] flex items-center justify-center">
          {/* AdSense ads will be inserted here */}
          <p className="text-sm text-muted-foreground">Loading advertisement...</p>
        </div>
      </div>

      {/* Ad Dialog/Popup */}
      <Dialog
        open={showAdDialog}
        onOpenChange={(open) => {
          setShowAdDialog(open)
          if (!open) {
            // When dialog is closed (including via X button), show battery results
            setIsLoading(false)
          }
        }}
      >
        <DialogContent className="sm:max-w-md">
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" />
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-center">Battery Check Complete!</h2>
            <p className="text-center">We've analyzed your battery status.</p>

            <div className="bg-muted p-2 rounded-lg">
              <p className="text-xs text-center text-muted-foreground mb-2">Advertisement</p>
              <div id="ad-container-popup" className="min-h-[300px] flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Loading advertisement...</p>
              </div>
            </div>

            <Button onClick={closeAdDialog} className="w-full">
              View Battery Results
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Google AdSense Script */}
      <Script
        id="google-adsense"
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
        crossOrigin="anonymous"
        onError={() => {
          console.log("AdSense script failed to load")
        }}
      />

      <footer className="mt-8 text-center text-xs text-muted-foreground">
        <p>This tool checks your device's battery status.</p>
        <p className="mt-1">Results may vary based on device and browser support.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <Link href="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </main>
  )
}

