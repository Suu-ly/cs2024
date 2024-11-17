import MaskText from "@/components/maskText";
import Splash from "@/components/splash";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MiText from "@/components/ui/miText";
import { useLenis } from "lenis/react";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { MaterialSymbol } from "react-material-symbols";
import { Link } from "react-router-dom";
import SupportSplash from "../assets/support/support_splash.jpg";

const FAQ = [
  {
    question:
      "What type of motor does the Xiaomi Smart Air Purifier 4 Pro use and does it make much noise?",
    answer:
      "The purifier uses a low-noise, durable brushless DC motor that supports stepless speed control. The unit's maximum decibel level is ≤ 64 dB (A) and it can be switched to sleep mode when you are sleeping.",
  },
  {
    question: "What is the part on the upper back of the air purifier?",
    answer:
      "This is a particulate matter (PM) laser sensor. Its main function is to monitor PM2.5 concentration in the air.",
  },
  {
    question: "What should I do if the purifier cannot be powered on?",
    answer:
      "First, ensure the electricity outlet works properly, and the power cord is properly connected. If everything above is normal, when you turn the power on, you should hear a beep, and the Xiaomi logo should appear on the display and then disappear. Then, press the On/Off button to turn on the purifier. If you hear a beep and see a prompt displayed on the display, indicating that the cover or the top grille is not closed, the purifier is properly powered but the top grille or filter cover is not properly installed. Please reinstall the top grille or filter cover.",
  },
  {
    question: "The display is showing vertical lines, what has gone wrong?",
    answer:
      "Power down the purifier, then power it back on after at least 10 seconds. If the problem persists, the display is faulty. In this case, please contact after-sales service.",
  },
  {
    question:
      "What should I do if a prompt is shown on the display, indicating that the filter cover or the top grille is not closed?",
    answer:
      "Check whether the filter cover or the top grille is tightly closed. If not, reinstall them. Power off the purifier, and wait at least 10 seconds before turning it on. Contact after-sales service if the above steps do not resolve the problem.",
  },
  {
    question: "What should I do if the display prompts 'Motor Fault'?",
    answer:
      "Check whether the filter has been installed properly. If not, reinstall it. Check the fan for any foreign object blocking the motor or causing the motor to malfunction. If so, power off the air purifier and then power it back on after 10 seconds. Contact after-sales service if the above steps do not resolve the problem.",
  },
  {
    question:
      "What should I do if the PM2.5 concentrations displayed are abnormal or inaccurate?",
    answer:
      "In case of inaccurate or abnormal PM 2.5 concentrations, check whether the PM laser sensor compartment cover on the back of the air purifier is dirty or blocked. If it is dirty or blocked, open the PM laser sensor compartment cover using a blunt implement. Then, clean the filter and the sensor on the compartment cover by using a blower or hair dryer (do not use hot air). Wet a toothbrush with clean water and brush the filter mesh on the laser sensor cover gently. Reinstall the filter after cleaning and air-drying it. If the problem persists, please contact after-sales service. The value of environmental parameters displayed may vary between different purifiers. Differences in installation height and other environmental factors may also result in parameter variance. You may perform smoke test on sleep mode and perform it at different levels. If the margin of error increases linearly, the PM laser sensor is faulty. If the error is maintained within a certain range, the air purifier is operating properly.",
  },
  {
    question: "Why is there current noise when the purifier is powered down?",
    answer:
      "This noise is generated by inductors in its DC-DC circuit. The mainboard converts 24 V to 5 V or 3.3 V voltage, during which these inductors frequently switch on and off, since they are engaged in converting electric energy into a magnetic field and then back. During this conversion, a small current noise is generated during normal operation of the inductors.",
  },
  {
    question: "Why doesn't the fan on the purifier's PM laser sensor rotate?",
    answer:
      "When the display is on, the sensor shall operate continuously, displaying values in real time. When the display is off, the sensor only operates for 12-15 seconds every 2 minutes in order to prolong its working life. When you start the app, the sensor shall run continuously too. However, when you have quit the app, and the display is off for 5 minutes, the sensor will return to intermittent operation.",
  },
  {
    question: "What should I do if the purifier makes abnormal noises?",
    answer:
      "If the purifier makes abnormal noises while operating, check whether the filter is properly installed, and the filter package has been removed already. Then, check if there is any foreign object in the air purifier. If so, open the filter cover and remove the foreign object. Check whether there is any foreign object in the PM laser sensor.",
  },
  {
    question: "Can I position the air purifier horizontally?",
    answer:
      "This is not recommended. To produce the maximum air circulation allowing the clean air to reach every corner of your room to ensure optimal air purification performance, please position the air purifier vertically and keep the back of the purifier at least 10 cm away (the PM laser sensor is on the back of the device), the two sides and the front 20 cm away from any object (to prevent the air inlet from being blocked). If the air purifier is placed horizontally, the air circulation will be impeded, affecting its air purification performance.",
  },
  {
    question:
      "What are the precautions while connecting the air purifier to the network?",
    answer:
      "The Xiaomi Smart Air Purifier 4 Pro supports networked control and is compatible with most routers on the market. However, note the following requirements concerning routers' wireless networking:\n1. The Xiaomi Smart Air Purifier 4 Pro can only be connected to 2.4 GHz Wi-Fi networks. It does not support 5 GHz Wi-Fi yet.\n2. Wi-Fi encryption can only be WPA or WPA2. WEP encryption is not supported;\n3. DHCP must be enabled on the router. Static IP address assignment, web certification, and enterprise-oriented IEEE 802.1X are not supported.\n(To control the Xiaomi Smart Air Purifier 4 Pro via networking, download the 'Mi Home / Xiaomi Home' app.)",
  },
  {
    question:
      "What should I do to control Xiaomi Smart Air Purifier 4 Pro remotely via phone?",
    answer:
      "Scan the QR code on the manual or search for the 'Mi Home / Xiaomi Home' app on the app store. Download the app and bind the purifier to your Xiaomi account. Make sure your home Wi-Fi network is connected to the Internet. Connect your phone to the Wi-Fi network, start the purifier, and open the 'Mi Home / Xiaomi Home' app. The app shall search for nearby Mi Home intelligent devices automatically, and prompt when a device is detected. Alternatively, tap + in the upper right corner to add a device manually. After adding Xiaomi Smart Air Purifier 4 Pro by following the prompts. You will be able to power it on or off, change mode, and check indoor air quality, temperature, and humidity via the app.",
  },
  {
    question: "Which settings will be lost after I reset the Wi-Fi?",
    answer:
      "The child lock and scheduled power-on/power-off defined by you in the app will be lost.",
  },
  {
    question:
      "Can one Xiaomi Smart Air Purifier 4 Pro be controlled by several people simultaneously?",
    answer:
      "Yes. ‘Share' the device to specific Xiaomi accounts through the 'Mi Home / Xiaomi Home' app to use this functionality.",
  },
  {
    question:
      "Can people with whom the Xiaomi Smart Air Purifier 4 Pro has been 'shared' upgrade the device firmware?",
    answer: "These ‘sharers' cannot upgrade the firmware yet.",
  },
  {
    question:
      "The app is showing that the purifier is always offline, or has failed to connect to Wi-Fi. What is the solution?",
    answer:
      "1. Check whether Xiaomi Smart Air Purifier 4 Pro is powered on and operating normally;\n2. Ensure the Wi-Fi network is available.\n3. Disconnect the power cord, and reconnect it after 10 seconds (long enough to allow the power supply to discharge). Then reset the purifier's Wi-Fi settings, and reconnect it to the Wi-Fi network.",
  },
  {
    question: "What is Favorite mode?",
    answer:
      "This is a 'Mi Home / Xiaomi Home' app setting that allows you to set the fan speed to suit your requirements. Set the fan speed to continuously variable for optimal air purification results.",
  },
  {
    question:
      "Will a humidifier affect the accuracy of the PM2.5 concentrations measured by the purifier?",
    answer:
      "Yes. An ultrasonic humidifier atomizes water into form of tiny, high-density particles. The air purifier's highly sensitive sensor will detect these water particles. As a result, its measurements will be slightly higher than the actual values, possibly even reaching the sensor's maximum reading. After shutting down the humidifier, the purifier's readings will return to normal. This is normal.",
  },
  {
    question: "Why are the buttons not working?",
    answer:
      "The 'Mi Home / Xiaomi Home' app includes a child lock for Xiaomi Smart Air Purifier 4 Pro. If it is enabled, the buttons on the purifier will fail to operate. You need to disable the child lock to use the buttons on the air purifier. Alternatively, you can turn the power off and on, or reset the Wi-Fi to disable the child lock.",
  },
];

const Support = () => {
  const Lenis = useLenis();
  const helpSectionRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Helmet>
        <title>Support · Smart Air Purifier 4</title>
        <meta
          name="description"
          content="Need help or have questions? Visit our Contact & Support page for assistance, FAQs, and ways to get in touch with our team."
        />
      </Helmet>
      <main className="flex flex-col gap-20">
        <Splash src={SupportSplash} alt="Xiaomi Smart Air Purifier 4">
          <div className="flex size-full items-start justify-end px-4 pb-16 pt-[104px] md:px-16 md:pb-32">
            <div className="flex max-w-sm flex-col items-end gap-8 text-right">
              <MiText className="font-medium text-emerald-600">
                Help Centre
              </MiText>
              <MaskText variant="splash" text="How can we help you" />
              <MiText className="font-medium text-slate-800">
                Find answers to your questions or get in touch with our support
                team.
              </MiText>
            </div>
          </div>
        </Splash>
        <section className="flex flex-col gap-8 px-4 md:flex-row md:px-16">
          <div className="flex-1">
            <MaskText
              variant="header"
              text="Frequently Asked Questions"
              className="mb-8"
            />

            <div
              className="mt-8 flex cursor-pointer items-center gap-2"
              onClick={() => {
                if (helpSectionRef.current) {
                  Lenis?.scrollTo(helpSectionRef.current, { duration: 1 });
                }
              }}
            >
              <MaterialSymbol
                icon="chat"
                size={24}
                className="text-slate-700"
              />
              <MiText>Still need help? Chat with us.</MiText>
            </div>
          </div>

          <div className="w-full flex-1 md:w-auto">
            <Accordion type="single" collapsible>
              {FAQ.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <section
          ref={helpSectionRef}
          className="mx-auto w-full px-4 md:max-w-3xl md:px-16"
        >
          <div className="mb-16">
            <MaskText
              variant="header"
              text="Get in Touch"
              className="mb-4 text-center"
            />
            <MiText className="text-center">We're here to help!</MiText>
          </div>
          <div className="flex w-full flex-col items-center gap-8">
            <div className="flex w-full flex-col gap-8 md:flex-row">
              <div className="w-full">
                <Input
                  variant={"large"}
                  type="text"
                  placeholder="First Name"
                  className="rounded-full"
                />
              </div>
              <div className="w-full">
                <Input
                  variant={"large"}
                  type="text"
                  placeholder="Last Name"
                  className="rounded-full"
                />
              </div>
            </div>
            <Input
              variant={"large"}
              type="email"
              placeholder="Your Email"
              className="rounded-full"
            />
            <Input
              variant={"large"}
              type="tel"
              placeholder="Your Phone Number"
              className="rounded-full"
            />
            <textarea
              className="w-full resize-none rounded-3xl border border-slate-300 bg-transparent px-6 py-4 text-2xl text-slate-900 transition-shadow placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="How can we help you?"
              rows={6}
            />
            <Button asChild className="w-full py-4 text-2xl">
              <Link to="/">Talk to us</Link>
            </Button>
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl font-medium text-slate-700">
              Or reach us at:
            </p>
            <p className="text-lg text-slate-600">Phone: 800 852 8474</p>
            <p className="text-lg text-slate-600">
              Email:{" "}
              <a
                href="mailto:service.sg@support.mi.com"
                className="hover:underline"
              >
                service.sg@support.mi.com
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Support;
