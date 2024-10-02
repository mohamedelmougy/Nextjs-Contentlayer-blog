"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState } from "react";

const supabase = createClientComponentClient();

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [view, setViews] = useState(0);

  useEffect(() => {
    const incrementView = async () => {
      try {
        let { error } = await supabase.rpc("increment", {
          slug_text:slug ,
        });

        if (error){
            console.error("Error incrementing view count inside try block:", error)
        };
        
      } catch (error) {
        console.error(
          "An error occurred while incrementing the view count:",
          error
        );
      }
    };

    if(!noCount){
        incrementView();
    }
  }, [slug, noCount]);
  useEffect(() => {
    const Getviews = async () => {
      try {
        let { data, error } = await supabase
          .from("views")
          .select("count")
          .match({slug:slug})
          .single() 
        if (error) {
          console.error("error incrementing view count inside try block:",error);
        }

        setViews(data?data.count:0)

      } catch (error) {
        console.error("An error occurred while incrementing the view count");
      }
    };
      Getviews();
  }, [slug]);

  if (showCount) {
    return <div>{view} views</div>;
  } else {
    return null;
  }
};

export default ViewCounter;
