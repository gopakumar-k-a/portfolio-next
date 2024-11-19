"use client";

import Hero from "@/components/Hero";
import { useEffect } from "react";
import { delay, motion } from "framer-motion";
export default function Home() {
  useEffect(() => {
    console.log("loaded home");
  }, []);
  return (
    <>
      <div className="w-screen dark:bg-gray-900 bg-gray-50 ">
        <Hero />

        <motion.div
          // initial={{ opacity: 1 }}
          // whileInView={{ opacity: 0 }}
          // viewport={{ margin: "-200px" }}
          className="dark:bg-gray-900 bg-gray-50"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 1 } }}
            // viewport={{ margin: "-1000px" }}
            className="dark:text-white text-black"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vehicula maximus felis. Phasellus euismod libero ac justo mollis
            elementum. Donec tincidunt finibus leo mollis placerat. Aenean
            tristique, nunc a vehicula sollicitudin, magna lorem lacinia est, in
            molestie dui purus at mauris. Proin dictum nunc eget nisl convallis
            viverra. Nulla sodales risus id aliquet fringilla. Cras nec turpis
            quam. Ut posuere lorem erat, vitae hendrerit enim porttitor ac.
            Maecenas gravida hendrerit ex sit amet tincidunt. Nulla sit amet
            dictum augue. Curabitur sed venenatis turpis. Aenean non augue
            dapibus, condimentum libero ut, elementum ex. Nunc dignissim
            tristique maximus. Vestibulum leo nunc, dignissim eget vehicula in,
            aliquet id magna. Etiam ornare tellus eu nibh efficitur porttitor.
            Vestibulum sit amet ultricies lorem, vitae congue augue. Maecenas
            tristique augue vel imperdiet pulvinar. Donec facilisis pretium
            turpis, a pretium urna posuere vitae. In in turpis eu velit vehicula
            luctus sit amet eget nulla. Sed dictum felis velit, at mattis mi
            sollicitudin eu. Ut auctor aliquam magna, ut aliquet sem ullamcorper
            ac. Cras faucibus vel odio eu luctus. Quisque cursus lobortis purus,
            lacinia ultricies nulla pulvinar fringilla. Donec dictum tempus
            fringilla. Cras a consequat turpis. Nunc sit amet euismod libero.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Morbi maximus elit eu metus feugiat
            molestie. Nullam porta neque auctor turpis posuere, lobortis rutrum
            neque vehicula. Aenean lacinia dui eu tellus egestas luctus.
            Maecenas pretium placerat eros, sit amet maximus magna blandit ac.
            Nunc eleifend, turpis ac tempor efficitur, mi risus ultricies augue,
            id consequat eros tortor id odio. Duis commodo nulla faucibus ipsum
            dignissim dignissim. Praesent tincidunt, massa ac consequat aliquam,
            diam lacus suscipit nisl, ut congue odio quam sit amet nisi. Sed
            fermentum tortor quis ligula lacinia feugiat. Nullam id hendrerit
            nibh. Donec non lorem ornare, aliquam urna faucibus, dignissim
            tortor. Quisque id odio quis magna fringilla tempor. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Suspendisse convallis dui blandit turpis mollis
            convallis. Curabitur ut sollicitudin mauris. Curabitur at fermentum
            mauris. Nullam eu accumsan nulla. Vestibulum sed nunc facilisis,
            ornare felis ac, hendrerit leo. Vestibulum fermentum pretium
            commodo. Mauris nibh enim, venenatis vitae ullamcorper vitae,
            condimentum lobortis felis. Quisque sagittis dignissim sem, ut
            pellentesque ex eleifend ut. Integer vitae dolor sem. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Vestibulum ipsum sapien, semper venenatis interdum a,
            facilisis accumsan diam. Etiam id tempus massa. Integer scelerisque
            lectus tortor, ornare porttitor est pulvinar a. Maecenas pharetra id
            nisi sit amet suscipit. Donec euismod neque ac velit viverra, id
            posuere ipsum rhoncus. Fusce mattis dolor vitae nunc volutpat, sit
            amet fringilla ipsum convallis. Quisque fringilla elit nec nisl
            pretium euismod. Mauris eros velit, volutpat vulputate erat non,
            sagittis vestibulum tellus. Curabitur purus tellus, posuere quis
            neque in, posuere cursus ligula. Vivamus aliquam dictum risus sed
            posuere. Nam eget est id nulla pellentesque elementum. Cras luctus,
            neque in mattis pharetra, mi dui tristique velit, eget condimentum
            nulla lectus ac ante. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Praesent ante leo,
            laoreet vel ex at, euismod blandit sapien. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Pellentesque ultricies, nisl in tempor bibendum, dolor
            ipsum sagittis sapien, non auctor velit nisi sit amet mauris. Sed
            egestas convallis dictum. Donec ac nibh quis dolor varius lobortis.
            Suspendisse quis orci non nisl dignissim varius. Duis rhoncus ante
            elit, non accumsan turpis porta ac. Vivamus in aliquet tortor, vel
            pharetra lorem. Nunc vel viverra nisi. Morbi commodo lorem sed nisl
            volutpat tempor. Nulla facilisi. Donec ex augue, iaculis eget
            egestas a, ultrices sit amet turpis. Nam vel sapien maximus,
            bibendum neque et, tempor augue. Donec nec sem at neque feugiat
            vehicula. Nulla pharetra ante nunc, in suscipit nisl efficitur quis.
            Vestibulum bibendum, urna quis rutrum feugiat, tortor enim rutrum
            eros, a mollis risus nibh vel purus. Nam vulputate urna sit amet
            quam faucibus, sed tempus nisl fringilla. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Donec tristique tellus ligula, ac pulvinar est tempor non.
            Mauris vestibulum tellus vel purus vestibulum dapibus. Maecenas
            iaculis, tellus eu sodales hendrerit, velit magna varius tellus, sed
            dignissim ante mi nec tortor. Maecenas tellus tortor, mattis eu erat
            et, tincidunt posuere nisl. Aliquam luctus ultricies augue, non
            ultrices felis. Suspendisse finibus ante non pretium porttitor. Sed
            nisi velit, posuere eu risus vel, rutrum elementum quam. Cras
            ultrices cursus nisi eu efficitur. Aenean sit amet neque ut lorem
            feugiat interdum. Phasellus eu mollis ex. Nullam vitae venenatis mi,
            ac aliquet nibh. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Proin eget ex quis risus
            facilisis gravida vel sed nisi. Nulla mauris libero, luctus sed
            tristique in, tincidunt at quam. Integer eu dignissim nibh. Sed
            porta porttitor mattis. Sed lacinia, velit et bibendum viverra, diam
            sem sodales neque, non tincidunt diam libero dapibus nisi.
            Suspendisse hendrerit elit ac odio lobortis rutrum. Nam nunc odio,
            mollis ut rhoncus ut, hendrerit sed justo. Aenean tellus nisi,
            mattis a odio id, vehicula blandit lectus. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Mauris egestas ultrices nisi et dictum. Aenean eget eros sapien.
            Vestibulum vitae varius orci. In ut volutpat diam. Duis metus ex,
            lacinia cursus laoreet id, mollis sit amet quam. Cras venenatis quam
            suscipit mattis elementum. Ut at pulvinar turpis. Aliquam erat
            volutpat. Vivamus sollicitudin neque eu nunc auctor rutrum. Sed
            bibendum eros ac tellus congue, in congue massa euismod. Ut in
            faucibus dolor. Suspendisse mi risus, tristique non orci vitae,
            dignissim consequat nisi. Maecenas et ante vel est luctus accumsan
            vel quis lectus. Ut pharetra facilisis tellus, ut maximus nibh
            dictum ut. Quisque nisl enim, facilisis sit amet magna ac, viverra
            efficitur lectus. Suspendisse potenti. Aliquam erat volutpat.
            Vestibulum nec justo vitae nunc auctor sodales a placerat arcu.
          </motion.p>
        </motion.div>
      </div>
    </>
  );
}
