const mongoose = require('mongoose')
const express = require('express')
const userContactModel = require('../Models/userContactModels')

const createUser = async (req,res)=>{
    const {email} = req.body.email
    const user =await userContactModel.create({
        email:req.body.email,
        number:req.body.number,
        countryCode:req.body.countryCode,
        userName:req.body.userName,
        address:req.body.address,
        linkeddIn:req.body.linkeddIn,
        facebook:req.body.facebook,
        instagram:req.body.instagram,
        github:req.body.github
    })
    res.status(200).json(user);
}

const getUser = async (req, res) => {
    try {
        const {email} = req.body.email
        const user = await userContactModel.findOne({ email: email});
        res.status(200).json(user);
    } catch (error) {
        console.log(error)
    }
}

const addFriend = async (req, res) => {
    const {email,friendEmail} = req.body;
    const user = await userContactModel.findOne({email})
    const friend = await userContactModel.findOne({ email: friendEmail})
    console.log(user,friend)
    const friends = user.friends
    friends.push(friend._id);
    user.friends = friends;
    await user.save();
    res.status(200).send(user);
}

module.exports = {createUser,getUser,addFriend}